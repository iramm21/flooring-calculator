# Next.js Flooring Calculator - Implementation Checklist

## 1. User Authentication

- [x] Implement user registration (username, email, password, role selection)
- [x] Implement user login with JWT authentication
- [ ] Create authentication middleware for protecting routes
- [ ] Implement logout functionality
- [x] Create login and registration UI pages

## 2. User Dashboard

### Dashboard Layout

- [ ] Create a sidebar menu with links to Jobs, Reports, Settings
- [ ] Display a summary of active and completed jobs

### Jobs Management

- [ ] Allow users to create, edit, and delete jobs
- [ ] Show job details including project name, client details, and flooring type
- [ ] Implement status tracking (e.g., In Progress, Completed, On Hold)

## 3. Flooring Calculations

### General Calculation Inputs

- [ ] Allow users to set default values for material price, waste percentage, and other calculations in their account settings

### Flooring Material Calculations

- [ ] Implement area-based material calculation (square meters or square feet)
- [ ] Calculate required flooring materials based on input area and coverage per unit
- [ ] Factor in waste percentage

### Cost Estimation

- [ ] Implement labor cost calculation (customizable by user)
- [ ] Implement material cost estimation

### Advanced Calculations

- [ ] Support different flooring types (tiles, hardwood, vinyl, carpet)
- [ ] Allow users to input room dimensions and calculate flooring per room

## 4. Role-Based Access Control (RBAC)

- [ ] Define user roles: Admin, Contractor, Standard User
- [ ] Restrict access to certain routes based on role
- [ ] Implement an admin dashboard to manage users and view all projects

## 5. Reporting & Exporting

- [ ] Generate job summary reports with all calculations
- [ ] Allow users to download reports as PDF
- [ ] Implement a simple print-friendly report page

## 6. User Settings & Preferences

- [ ] Allow users to update profile information (name, email, password)
- [ ] Let users set and save calculation preferences (default material price, waste %, etc.)

## 7. Future Enhancements (Not Implementing Now, But Keeping in Mind)

- [ ] Third-Party API Integrations (e.g., pricing estimators, supplier catalogs)
- [ ] Mobile App Version (React Native or PWA)
- [ ] AI-Based Recommendations (Suggest materials based on user preferences)
