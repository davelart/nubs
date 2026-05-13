# Leadership Section Dynamification

This document outlines the changes made to make the leadership section dynamic and the steps needed to complete the setup.

## Changes Made

### 1. Updated Prisma Schema
- Added new fields to the `Leadership` model:
  - `role`: String (required) - The leadership role/position
  - `institution`: String (required) - The institution or organization
  - `academicYear`: String (required) - Academic year (e.g., "2026/2027")
  - `grade`: String (optional) - Academic grade/level
  - `bio`: String (optional) - Biography/description
  - `photoId`: Int (optional) - Reference to Media model for photos
- Added relationship between `Leadership` and `Media` models
- Removed deprecated fields: `title`, `photoUrl`, `photoKey`

### 2. Updated API Routes
- Modified `/api/leadership` GET route to:
  - Support filtering by `academicYear` query parameter
  - Include photo relationship in response
  - Filter only active leadership members
- Modified POST route to handle new schema fields
- Updated validation to require new fields

### 3. Updated Leadership Component
- Converted to client-side component with data fetching
- Added loading and error states
- Dynamic academic year display based on current data
- Proper image handling with fallback to placeholder
- Coordinator card special styling maintained

## Required Setup Steps

To complete the implementation, you need to run these commands:

### 1. Generate Prisma Client
```bash
npx prisma generate
```

### 2. Create Database Migration
```bash
npx prisma migrate dev --name update-leadership-schema
```

### 3. Seed Leadership Data (Optional)
```bash
npx tsx prisma/seed-leadership.ts
```

## Features

### Dynamic Academic Year
- The component automatically detects and displays the current academic year
- Format: "2026/2027", "2027/2028", etc.
- Can be overridden via API query parameter

### Image Handling
- Photos are stored using the Media model relationship
- Automatic fallback to placeholder avatar if no image
- Error handling for broken image URLs

### Role-based Display
- Coordinator gets special card styling
- Regular NEC members displayed in standard cards
- Maintains original visual design

### Admin Management
- Leadership can be managed through admin interface
- Support for photo uploads
- Order can be controlled for display arrangement

## API Usage

### Get Current Leadership
```javascript
fetch('/api/leadership?academicYear=2026/2027')
```

### Get All Leadership
```javascript
fetch('/api/leadership')
```

### Create New Leadership (Admin)
```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('role', 'President');
formData.append('institution', 'University of Example');
formData.append('academicYear', '2026/2027');
formData.append('grade', 'Level 400');
formData.append('bio', 'Biography text');
formData.append('photo', file);
formData.append('order', '1');

fetch('/api/leadership', {
  method: 'POST',
  body: formData,
  headers: {
    'Authorization': 'Bearer token'
  }
})
```

## Future Enhancements

1. **Academic Year Management**: Add UI for managing multiple academic years
2. **Bulk Operations**: Add support for bulk leadership updates
3. **Photo Gallery**: Enhanced photo management with cropping
4. **Export/Import**: CSV export and import functionality
5. **History**: Track leadership changes over years

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors related to Prisma types, run:
```bash
npx prisma generate
```

### Database Issues
If database schema is not updated, run:
```bash
npx prisma migrate dev
```

### Images Not Displaying
- Ensure Media records exist in database
- Check image URLs are accessible
- Verify photo relationships are properly set
