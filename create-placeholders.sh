#!/bin/bash

# Base directory for images
IMAGE_DIR="/Users/hnorza/Documents/GitHub/motoblog/public/images"
PLACEHOLDER_PATH="$IMAGE_DIR/placeholder.jpg"

# Create directories if they don't exist
mkdir -p "$IMAGE_DIR/blog"
mkdir -p "$IMAGE_DIR/authors"
mkdir -p "$IMAGE_DIR/learn-to-ride"
mkdir -p "$IMAGE_DIR/maintenance"
mkdir -p "$IMAGE_DIR/gear"
mkdir -p "$IMAGE_DIR/road-life"
mkdir -p "$IMAGE_DIR/buying-guides"

# Create common images
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/first-motorcycle.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/maintenance-diy.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/helmets.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/learn-to-ride.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/buying-guides.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/maintenance.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/gear.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/road-life.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/about.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/buying-guides-header.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/sportbike.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/cruiser.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/adventure.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/naked.jpg"

# Create blog post images
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/diy-maintenance.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/beginner-bikes-2025.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/rocky-mountains.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/slow-speed.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/beginner-motorcycle-tips.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/best-beginner-motorcycles-2025.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/blog/motorcycle-maintenance-basics.jpg"

# Create author images
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/mike.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/sarah.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/david.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/lisa.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/tom.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/emma.jpg"
cp "$PLACEHOLDER_PATH" "$IMAGE_DIR/authors/default.jpg"

# Create favicon and apple-touch-icon
cp "$PLACEHOLDER_PATH" "/Users/hnorza/Documents/GitHub/motoblog/public/favicon.ico"
cp "$PLACEHOLDER_PATH" "/Users/hnorza/Documents/GitHub/motoblog/public/apple-touch-icon.png"

echo "All placeholder images created successfully!"
