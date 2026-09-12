# Doza - Student Housing Marketplace

A modern, interactive real estate marketplace built for student housing. This redesign transforms Doza's property search experience with an Airbnb/Zillow-style interface, featuring interactive property browsing, college integration, and vibrant lime green branding.

**Brand Colors:**
- **Accent**: #C9FF00 (Doza Lime Green)
- **Primary**: #0F172A (Dark)
- **Secondary**: #64748B (Gray)

## 🏠 Features

- **Buy, Rent, or Sell** - Three distinct search modes with tailored experiences
- **Advanced Search** - Filter by location, price, and bedrooms
- **Save Properties** - Heart/save functionality to keep track of favorite listings
- **Property Cards** - Beautiful, responsive property listings with images and details
- **🎓 Colleges Section** - View universities and colleges with active property listings in your area
- **College Filtering** - Click any college to view their available properties
- **College Following** - Follow colleges to track their listings
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant reveal animations and interactive transitions
- **Vibrant Color Palette** - Modern, eye-catching design with gradient accents
- **Seller Tools** - Dedicated section for property owners to list and manage listings

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/doza-housing.git
cd doza-housing
```

2. Open `index.html` in your web browser:
```bash
# Using Python's built-in server (recommended)
python -m http.server 8000

# Or using Node's http-server
npx http-server

# Or just open the file directly
open index.html
```

3. Visit `http://localhost:8000` in your browser

## 📁 File Structure

```
doza-housing/
├── index.html          # Main HTML file with structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## 💻 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **Google Fonts** - DM Sans & Playfair Display typography

## 🎨 Design System

### Colors
- **Primary**: #0F172A (Dark Slate)
- **Secondary**: #64748B (Slate)
- **Accent**: #C9FF00 (Doza Lime Green)
- **Accent Dark**: #B0E600 (Deep Lime)
- **Accent Light**: #E8FF66 (Bright Lime)
- **Light**: #F1F5F9
- **Lighter**: #F8FAFC

### Gradients
- **Primary Gradient**: Lime Green → Bright Lime (#C9FF00 → #E8FF66)
- **Secondary Gradient**: Lime Green → Deep Lime (#C9FF00 → #B0E600)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: DM Sans (all other text)

### Spacing
- Uses 8px base unit
- Consistent padding/margin scale

## ✨ Key Features Explained

### Search Modes
Three search tabs (Buy/Rent/Sell) change the search button text and can be configured to filter different property types.

### Property Filtering
Filter buttons allow users to narrow down results by:
- Recommended
- For Sale
- For Rent
- New Listings
- 3+ Bedrooms
- Pet Friendly

### Save Properties
Click the heart icon on any property card to save it. The heart fills with color and the property is stored in browser memory.

### Responsive Sections
- **Hero**: Eye-catching introduction with call-to-action
- **Search Card**: Central search experience
- **Colleges**: Universities and colleges with active property listings in the area
- **Properties**: Grid of property listings
- **Experience**: Benefits and features highlight
- **Seller Section**: Information for property owners
- **Footer**: Navigation and branding

### Colleges Feature
The colleges section displays universities and colleges that have active property listings in the selected area:
- **College Cards**: Show college name, location, and listing count
- **Quick Actions**: 
  - "View Properties" - Filters properties by that college
  - "Follow" - Saves the college to follow their listings
- **Listing Types**: Displays whether they have Buy, Rent, or both options
- **Color-Coded**: Each college has a unique colored badge for easy identification

## 🔧 JavaScript Features

### Search Tab Switching
Users can switch between Buy, Rent, and Sell modes. The search button text updates accordingly.

### Property Interaction
- Click property cards to view details (expandable to show modals)
- Click heart icon to save/unsave properties
- Smooth animations on interaction

### Keyboard Shortcuts
- Press **B** to switch to Buy mode
- Press **R** to switch to Rent mode
- Press **S** to switch to Sell mode

### Smooth Scrolling
All internal links use smooth scroll behavior.

### Intersection Observer
Implements lazy reveal animations for better performance and visual polish.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Usage Examples

### Add a New Property Card
```html
<article class="property-card reveal">
  <div class="property-image">
    <img src="image-url.jpg" alt="Property description">
    <span class="property-tag">For Sale</span>
    <button class="heart" aria-label="Save property">♡</button>
  </div>
  <div class="property-content">
    <div class="property-price">$329,000</div>
    <h3>1847 River Park Drive</h3>
    <p class="property-location">City, State</p>
    <p class="property-details">3 beds · 2 baths · 1,820 sqft</p>
  </div>
</article>
```

### Customize Colors
Edit the CSS variables at the top of `style.css`:
```css
:root {
  --primary: #0F172A;
  --accent-blue: #06B6D4;
  --accent-purple: #8B5CF6;
  --accent-orange: #F97316;
  --accent-green: #10B981;
  /* etc */
}
```

### Add or Update Colleges
Edit the `collegesData` array in `script.js`:
```javascript
const collegesData = [
  {
    id: 1,
    name: 'University Name',
    emoji: '🎓',
    listings: 24,
    types: 'Buy & Rent',
    location: 'City, State',
    brand: 1  // 1-4 for color coding
  },
  // Add more colleges...
];
```

The `brand` property (1-4) controls which gradient color is used for the college badge.

## 🚀 Deployment

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch as source
4. Visit `https://yourusername.github.io/doza-housing`

### Deploy to Netlify
1. Connect GitHub repo
2. Set build command: (none needed)
3. Set publish directory: `/` (root)
4. Deploy

### Deploy to Vercel
1. Import GitHub repo
2. Use default settings
3. Deploy

## 🔐 Best Practices

- All HTML is semantic and accessible
- CSS uses custom properties for easy theming
- JavaScript is vanilla (no dependencies)
- Images use unsplash.com (free stock photos)
- Code is organized by sections with comments

## 📝 Customization Guide

### Change Logo
Edit `.logo` in HTML and update the text/styling in CSS.

### Update Property Data
Edit the property cards in the HTML or connect to a backend API.

### Modify Colors
Update CSS variables in `style.css`:
```css
:root {
  --primary: #your-color;
  --accent: #your-color;
}
```

### Add More Sections
Copy existing section structure and adapt. Use the `reveal` class for animations.

## 🐛 Troubleshooting

**Images not loading?**
- Check image URLs are correct
- Ensure images are publicly accessible
- Use HTTPS URLs

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is in same directory
- Verify file paths in HTML

**JavaScript not working?**
- Check browser console for errors (F12)
- Ensure script.js is loaded (check Network tab)
- Verify JavaScript is enabled in browser

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Credits

- **Font**: Google Fonts (DM Sans, Playfair Display)
- **Images**: Unsplash
- **Inspiration**: Modern real estate platforms (Zillow, Airbnb, Redfin)

---

**Happy househunting! 🏡**
