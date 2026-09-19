Add-Type -AssemblyName System.Drawing

$sourceDir = "d:\Ahmed-blog\public\images\exchange-install-backup"
$destDir   = "d:\Ahmed-blog\public\images\exchange-install"
$logoPath  = "d:\Ahmed-blog\public\watermark-logo.png"

$logoBytes = [System.IO.File]::ReadAllBytes($logoPath)
$logoMs = New-Object System.IO.MemoryStream(,$logoBytes)
$logoImg = [System.Drawing.Image]::FromStream($logoMs)

$files = Get-ChildItem -Path $sourceDir | Where-Object { $_.Extension -match "\.(png|jpg|jpeg)$" }

foreach ($file in $files) {
    $srcPath = $file.FullName
    $outPath = Join-Path $destDir $file.Name
    $fileName = $file.Name

    $sourceBytes = [System.IO.File]::ReadAllBytes($srcPath)
    $ms = New-Object System.IO.MemoryStream(,$sourceBytes)
    $sourceImg = [System.Drawing.Image]::FromStream($ms)

    $bitmap = New-Object System.Drawing.Bitmap($sourceImg.Width, $sourceImg.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($sourceImg, 0, 0, $sourceImg.Width, $sourceImg.Height)

    # Size between 60 and 70px
    $targetSize = [Math]::Max(55, [Math]::Min(70, [int]($sourceImg.Width * 0.08)))
    $targetWidth = $targetSize
    $targetHeight = $targetSize

    # Smart positioning
    if ($fileName -match "setup") {
        # Place above the Next/Finish buttons in setup wizard
        $x = $sourceImg.Width - $targetWidth - 36
        $y = $sourceImg.Height - $targetHeight - 88
    } elseif ($fileName -match "(01|09|21|22)") {
        # Full desktop with Windows taskbar at bottom
        $x = $sourceImg.Width - $targetWidth - 24
        $y = $sourceImg.Height - $targetHeight - 58
    } else {
        # PowerShell or general windows
        $x = $sourceImg.Width - $targetWidth - 24
        $y = $sourceImg.Height - $targetHeight - 24
    }

    $matrix = New-Object System.Drawing.Imaging.ColorMatrix
    $matrix.Matrix33 = 0.85
    $attributes = New-Object System.Drawing.Imaging.ImageAttributes
    $attributes.SetColorMatrix($matrix, [System.Drawing.Imaging.ColorMatrixFlag]::Default, [System.Drawing.Imaging.ColorAdjustType]::Bitmap)

    $rect = New-Object System.Drawing.Rectangle($x, $y, $targetWidth, $targetHeight)
    $graphics.DrawImage($logoImg, $rect, 0, 0, $logoImg.Width, $logoImg.Height, [System.Drawing.GraphicsUnit]::Pixel, $attributes)

    $graphics.Dispose()
    $sourceImg.Dispose()
    $ms.Dispose()
    $attributes.Dispose()

    $ext = [System.IO.Path]::GetExtension($outPath).ToLower()
    if ($ext -eq ".jpg" -or $ext -eq ".jpeg") {
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
        $bitmap.Save($outPath, $codec, $encoderParams)
        $encoderParams.Dispose()
    } else {
        $bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    $bitmap.Dispose()

    Write-Output "Watermarked: $($file.Name)"
}

$logoImg.Dispose()
$logoMs.Dispose()

# Clean up test files
Remove-Item -Path "d:\Ahmed-blog\public\test-*.png" -ErrorAction SilentlyContinue
Remove-Item -Path "d:\Ahmed-blog\public\test-*.jpg" -ErrorAction SilentlyContinue

Write-Output "All $($files.Count) images watermarked successfully!"
