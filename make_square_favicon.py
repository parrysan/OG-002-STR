from PIL import Image

def make_square(image_path, output_path):
    img = Image.open(image_path)
    width, height = img.size
    
    new_size = max(width, height)
    new_img = Image.new("RGBA", (new_size, new_size), (0, 0, 0, 0))
    
    # Calculate position to paste the original image (centered)
    x = (new_size - width) // 2
    y = (new_size - height) // 2
    
    new_img.paste(img, (x, y))
    new_img.save(output_path)
    print(f"Squared image saved to {output_path}")

if __name__ == "__main__":
    make_square("docs/assets/logo/logo-str-06-On-Black.png", "src/public/test-favicon-square.png")
