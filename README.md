This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Technology Stack

### UI Framework
- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type safety

### UI Components
- **Ant Design (AntD)** - Enterprise-class UI design language and React UI library
- **@ant-design/icons** - Icon components for Ant Design
- **Tailwind CSS** - Utility-first CSS framework

### Features
- Modern, responsive design
- Form validation with Ant Design Form components
- Icon support from @ant-design/icons
- ConfigProvider for theming and customization

## Ant Design Integration

This project uses [Ant Design](https://ant.design/) for enterprise-grade UI components. The integration includes:

### Setup
- `ConfigProvider` is configured in `app/layout.tsx` to wrap the entire application
- Ant Design CSS is imported for styling
- Components use Ant Design icons from `@ant-design/icons`

### Usage Example
```tsx
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function MyComponent() {
  const [form] = Form.useForm();
  
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="username">
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
}
```

### Available Ant Design Components
- Form, Input, Input.Password
- Button, Divider
- Layout, Menu, Avatar
- Icons from @ant-design/icons

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Ant Design Documentation](https://ant.design/docs/react/introduce) - learn about Ant Design components
- [Ant Design Icons](https://ant.design/components/icon) - icon components

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
