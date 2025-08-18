# Deployment Guide - Vercel

Hướng dẫn triển khai Flex Living Reviews Dashboard lên Vercel.

## Chuẩn bị trước khi deploy

### 1. Tài khoản và Tools
- Tạo tài khoản Vercel tại [vercel.com](https://vercel.com)
- Cài đặt Vercel CLI (tùy chọn): `npm i -g vercel`
- Tài khoản GitHub để connect repository

### 2. Kiểm tra dự án
```bash
# Chạy build local để đảm bảo không có lỗi
npm run build

# Kiểm tra preview
npm run preview
```

## Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

### Bước 1: Import Project
1. Đăng nhập vào [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import repository từ GitHub

### Bước 2: Configure Project
- **Framework Preset**: Vite
- **Root Directory**: `./` (hoặc `./flex_living` nếu trong subfolder)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Bước 3: Environment Variables (Tùy chọn)
Trong Project Settings > Environment Variables, thêm:
```
NODE_ENV=production
VITE_APP_TITLE=Flex Living Reviews Dashboard
VITE_ENABLE_MOCK_DATA=true
```

### Bước 4: Deploy
Click "Deploy" - Vercel sẽ tự động build và deploy

## Cách 2: Deploy qua Vercel CLI

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Login vào Vercel
vercel login

# Deploy từ thư mục dự án
cd flex_living
vercel

# Hoặc deploy production
vercel --prod
```

## Cấu hình đã được setup

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json scripts
```json
{
  "vercel-build": "vite build",
  "start": "vite preview --port 3000"
}
```

### vite.config.ts
- Optimized build configuration
- Manual chunks for better caching
- Production-ready settings

## Tính năng đã được tối ưu cho production

### Performance
- ✅ Code splitting với manual chunks
- ✅ Static asset caching
- ✅ Minified bundle
- ✅ Tree shaking

### SEO & Accessibility
- ✅ Semantic HTML structure
- ✅ Proper meta tags
- ✅ Responsive design

### Security
- ✅ No sensitive data in client bundle
- ✅ Environment variables properly configured
- ✅ API keys excluded from build

## Kiểm tra sau khi deploy

### 1. Functional Testing
- [ ] Dashboard loads correctly
- [ ] Reviews filtering works
- [ ] Approval/disapproval functions
- [ ] Public reviews page displays
- [ ] Property switching works
- [ ] Responsive design on mobile

### 2. Performance Testing
- [ ] Page load speed < 3s
- [ ] Lighthouse score > 90
- [ ] No console errors

### 3. URL Testing
```
https://your-domain.vercel.app/          -> Dashboard
https://your-domain.vercel.app/reviews   -> Public Reviews
```

## Custom Domain (Tùy chọn)

1. Trong Vercel Dashboard > Project Settings > Domains
2. Add domain name
3. Configure DNS records như hướng dẫn

## Rollback nếu cần

```bash
# Xem deployment history
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

## Monitoring & Analytics

- Vercel cung cấp analytics miễn phí
- Xem performance metrics trong Dashboard
- Set up alerts cho downtime

## Troubleshooting

### Build Errors
```bash
# Debug locally
npm run build

# Check build logs trong Vercel Dashboard
```

### Routing Issues
- Đảm bảo `vercel.json` có rewrite rules
- SPA routing đã được configure

### Environment Variables
- Double-check variable names (VITE_ prefix required)
- Sensitive data chỉ set trong Vercel, không commit

## Next Steps sau khi deploy

1. **Monitor Performance**: Theo dõi Core Web Vitals
2. **Set up Analytics**: Google Analytics hoặc Vercel Analytics
3. **Security Headers**: Thêm security headers nếu cần
4. **CDN Optimization**: Vercel Edge Network tự động optimize

---

**🎉 Deployment hoàn thành!** 

Your Flex Living Reviews Dashboard is now live on Vercel với:
- ⚡ Lightning-fast loading
- 🔄 Automatic deployments từ git pushes  
- 📱 Mobile-optimized
- 🚀 Global CDN distribution
