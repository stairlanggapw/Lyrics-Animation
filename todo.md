# Lyrics Website - Development Plan

## Design Guidelines

### Design References
- **Z-Lyrics.netlify.app**: Clean lyrics display with synchronized timing
- **Style**: Modern Dark Theme with Video Background

### Color Palette
- Primary: #000000 (Black - background overlay)
- Secondary: #1a1a1a (Dark overlay for readability)
- Accent: #ff6b6b (Red - controls and highlights)
- Text: #FFFFFF (White), #cccccc (Light Gray - secondary)

### Typography
- Heading: Poppins font-weight 700 (48px)
- Current Lyric: Poppins font-weight 600 (32px)
- Next Lyric: Poppins font-weight 400 (20px)
- Controls: Poppins font-weight 500 (16px)

### Key Component Styles
- **Video Background**: Fullscreen, fixed position, with dark overlay (rgba(0,0,0,0.6))
- **Lyrics Container**: Centered, with smooth fade-in/fade-out transitions
- **Audio Controls**: Bottom fixed bar with play/pause, progress bar, volume control
- **Current Lyric**: Large, bold, glowing text effect
- **Next Lyric**: Smaller, semi-transparent, positioned below current

### Layout & Spacing
- Video: Full viewport, object-fit: cover
- Lyrics: Centered vertically and horizontally
- Controls: Fixed bottom, 20px padding
- Lyric transition: 0.5s fade effect

---

## Development Tasks

1. **Project Structure** 
   - Copy background.mp4 to public folder
   - Copy multo.mp3 to public folder
   - Update index.html structure

2. **HTML Structure**
   - Video background element
   - Lyrics display container (current + next lyric)
   - Audio element
   - Control panel (play/pause, progress bar, volume, skip buttons)

3. **CSS Styling**
   - Fullscreen video background with overlay
   - Centered lyrics with text shadow/glow effect
   - Modern control panel design
   - Smooth transitions and animations
   - Responsive design

4. **JavaScript Functionality**
   - Audio playback control
   - Lyrics synchronization based on timestamps
   - Progress bar interaction
   - Volume control
   - Skip previous/next lyric
   - Auto-scroll to current lyric

5. **Lyrics Data**
   - Implement provided lyrics with timestamps
   - Current lyric highlight
   - Next lyric preview

6. **Final Polish**
   - Test all controls
   - Ensure smooth transitions
   - Check responsive behavior