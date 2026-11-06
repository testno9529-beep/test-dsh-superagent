/**
 * i18n - Internationalization module for dashboard
 * Supports English (en) and Chinese (zh)
 */

const i18n = {
    // Current language
    currentLang: 'en',
    
    // Translation dictionaries
    translations: {
        en: {
            // Navigation
            "Welcome Dashboard": "Welcome Dashboard",
            "App": "App",
            "Dashboard": "Dashboard",
            "Analytics": "Analytics",
            "Users": "Users",
            "Settings": "Settings",
            "Help": "Help",
            
            // User profile
            "Welcome User": "Welcome User",
            "Administrator": "Administrator",
            
            // Header
            "Your personalized welcome interface": "Your personalized welcome interface",
            "Search...": "Search...",
            
            // Welcome banner
            "欢迎你国彬": "欢迎你国彬",
            "Welcome to our application dashboard. This is your personalized welcome interface where you can manage everything in one place.": "Welcome to our application dashboard. This is your personalized welcome interface where you can manage everything in one place.",
            "Get Started": "Get Started",
            "View Documentation": "View Documentation",
            
            // Stats cards
            "Total Users": "Total Users",
            "Sessions Today": "Sessions Today",
            "New Orders": "New Orders",
            "Revenue": "Revenue",
            
            // Recent Activity
            "Recent Activity": "Recent Activity",
            "View All": "View All",
            "New user registered": "New user registered",
            "John Doe joined the platform": "John Doe joined the platform",
            "min ago": "min ago",
            "hour ago": "hour ago",
            "hours ago": "hours ago",
            "File uploaded": "File uploaded",
            "Project_document.pdf": "Project_document.pdf",
            "Task completed": "Task completed",
            "\"Design welcome page\" marked as done": "\"Design welcome page\" marked as done",
            "New comment": "New comment",
            "On project dashboard design": "On project dashboard design",
            
            // Quick Actions
            "Quick Actions": "Quick Actions",
            "Add User": "Add User",
            "Upload File": "Upload File",
            "Generate Report": "Generate Report",
            "Help Center": "Help Center",
            "Export Data": "Export Data",
            
            // Hello World section
            "Hello World Implementation": "Hello World Implementation",
            "\"Hello World! Welcome to our application dashboard. This classic programming greeting represents the beginning of your journey with our platform.\"": "\"Hello World! Welcome to our application dashboard. This classic programming greeting represents the beginning of your journey with our platform.\"",
            "Copy Code": "Copy Code",
            
            // Footer
            "&copy; 2023 Welcome Dashboard. Created as part of the test-dsh-superagent project.": "&copy; 2023 Welcome Dashboard. Created as part of the test-dsh-superagent project.",
            "Privacy Policy": "Privacy Policy",
            "Terms of Service": "Terms of Service",
            "Contact Us": "Contact Us",
            
            // Simple welcome page texts
            "Simple Welcome Page": "Simple Welcome Page",
            "Welcome to the simple dashboard with a clean, modern design featuring the classic \"Hello World\" greeting.": "Welcome to the simple dashboard with a clean, modern design featuring the classic \"Hello World\" greeting.",
            "About This Page": "About This Page",
            "This is a simple welcome page created with HTML and CSS. It includes a dashboard layout with a \"Hello World\" sentence as requested.": "This is a simple welcome page created with HTML and CSS. It includes a dashboard layout with a \"Hello World\" sentence as requested.",
            "The page features responsive design, interactive elements, and follows modern web development practices.": "The page features responsive design, interactive elements, and follows modern web development practices.",
            "Features": "Features",
            "Responsive dashboard design": "Responsive dashboard design",
            "\"Hello World\" sentence prominently displayed": "\"Hello World\" sentence prominently displayed",
            "Clean, modern CSS styling": "Clean, modern CSS styling",
            "Interactive elements": "Interactive elements",
            "Mobile-friendly layout": "Mobile-friendly layout",
            "Easy to customize and extend": "Easy to customize and extend",
            "Try Hello World": "Try Hello World",
            "View Full Version": "View Full Version",
            "Hello World in Code": "Hello World in Code",
            "Here's how \"Hello World\" looks in different programming languages:": "Here's how \"Hello World\" looks in different programming languages:",
            "View on GitHub": "View on GitHub",
            "This page demonstrates a simple HTML/CSS implementation with dashboard layout and \"Hello World\" content.": "This page demonstrates a simple HTML/CSS implementation with dashboard layout and \"Hello World\" content.",
            
            // Language switcher
            "English": "English",
            "中文": "中文"
        },
        
        zh: {
            // Navigation
            "Welcome Dashboard": "欢迎仪表板",
            "App": "应用",
            "Dashboard": "仪表板",
            "Analytics": "分析",
            "Users": "用户",
            "Settings": "设置",
            "Help": "帮助",
            
            // User profile
            "Welcome User": "欢迎用户",
            "Administrator": "管理员",
            
            // Header
            "Your personalized welcome interface": "您的个性化欢迎界面",
            "Search...": "搜索...",
            
            // Welcome banner
            "欢迎你国彬": "欢迎你国彬",
            "Welcome to our application dashboard. This is your personalized welcome interface where you can manage everything in one place.": "欢迎来到我们的应用仪表板。这是您的个性化欢迎界面，您可以在一个地方管理所有内容。",
            "Get Started": "开始使用",
            "View Documentation": "查看文档",
            
            // Stats cards
            "Total Users": "总用户数",
            "Sessions Today": "今日会话",
            "New Orders": "新订单",
            "Revenue": "收入",
            
            // Recent Activity
            "Recent Activity": "最近活动",
            "View All": "查看全部",
            "New user registered": "新用户注册",
            "John Doe joined the platform": "John Doe 加入了平台",
            "min ago": "分钟前",
            "hour ago": "小时前",
            "hours ago": "小时前",
            "File uploaded": "文件已上传",
            "Project_document.pdf": "项目文档.pdf",
            "Task completed": "任务已完成",
            "\"Design welcome page\" marked as done": "\"设计欢迎页面\" 标记为已完成",
            "New comment": "新评论",
            "On project dashboard design": "关于项目仪表板设计",
            
            // Quick Actions
            "Quick Actions": "快速操作",
            "Add User": "添加用户",
            "Upload File": "上传文件",
            "Generate Report": "生成报告",
            "Help Center": "帮助中心",
            "Export Data": "导出数据",
            
            // Hello World section
            "Hello World Implementation": "Hello World 实现",
            "\"Hello World! Welcome to our application dashboard. This classic programming greeting represents the beginning of your journey with our platform.\"": "\"你好，世界！欢迎来到我们的应用仪表板。这个经典的编程问候代表了您在我们平台之旅的开始。\"",
            "Copy Code": "复制代码",
            
            // Footer
            "&copy; 2023 Welcome Dashboard. Created as part of the test-dsh-superagent project.": "&copy; 2023 欢迎仪表板。作为 test-dsh-superagent 项目的一部分创建。",
            "Privacy Policy": "隐私政策",
            "Terms of Service": "服务条款",
            "Contact Us": "联系我们",
            
            // Simple welcome page texts
            "Simple Welcome Page": "简易欢迎页面",
            "Welcome to the simple dashboard with a clean, modern design featuring the classic \"Hello World\" greeting.": "欢迎使用简易仪表板，采用简洁现代设计，展示经典的\"你好，世界！\"问候语。",
            "About This Page": "关于此页面",
            "This is a simple welcome page created with HTML and CSS. It includes a dashboard layout with a \"Hello World\" sentence as requested.": "这是一个使用 HTML 和 CSS 创建的简单欢迎页面。它包含一个仪表板布局，以及按要求添加的\"你好，世界！\"语句。",
            "The page features responsive design, interactive elements, and follows modern web development practices.": "此页面具有响应式设计、交互元素，并遵循现代网页开发实践。",
            "Features": "功能特点",
            "Responsive dashboard design": "响应式仪表板设计",
            "\"Hello World\" sentence prominently displayed": "突出显示的\"你好，世界！\"语句",
            "Clean, modern CSS styling": "简洁现代的 CSS 样式",
            "Interactive elements": "交互元素",
            "Mobile-friendly layout": "移动友好布局",
            "Easy to customize and extend": "易于定制和扩展",
            "Try Hello World": "尝试 Hello World",
            "View Full Version": "查看完整版本",
            "Hello World in Code": "代码中的 Hello World",
            "Here's how \"Hello World\" looks in different programming languages:": "以下是\"你好，世界！\"在不同编程语言中的写法：",
            "View on GitHub": "在 GitHub 上查看",
            "This page demonstrates a simple HTML/CSS implementation with dashboard layout and \"Hello World\" content.": "此页面展示了使用 HTML/CSS 实现的简单仪表板布局和\"你好，世界！\"内容。",
            
            // Language switcher
            "English": "English",
            "中文": "中文"
        }
    },
    
    /**
     * Set the current language
     * @param {string} lang - Language code ('en' or 'zh')
     */
    setLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            // Save to localStorage for persistence
            localStorage.setItem('dashboard_language', lang);
            // Update the page
            this.updatePage();
            return true;
        }
        return false;
    },
    
    /**
     * Get translation for a key
     * @param {string} key - Text key
     * @returns {string} Translated text
     */
    t: function(key) {
        const langDict = this.translations[this.currentLang];
        // Return translation if exists, otherwise return the key itself
        return langDict[key] || key;
    },
    
    /**
     * Update all translatable elements on the page
     */
    updatePage: function() {
        // Find all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Handle special cases
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translation;
            } else if (element.hasAttribute('title')) {
                element.title = translation;
            } else if (element.hasAttribute('alt')) {
                element.alt = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update language switcher text if it exists
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) {
            langSwitcher.textContent = this.currentLang === 'en' ? '中文' : 'English';
        }
        
        // Update direction for RTL languages if needed
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;
    },
    
    /**
     * Initialize i18n system
     */
    init: function() {
        // Try to get saved language from localStorage, otherwise use browser language
        const savedLang = localStorage.getItem('dashboard_language');
        const browserLang = navigator.language.substring(0, 2);
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (browserLang === 'zh' && this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        // Add language switcher to the page if it doesn't exist
        this.addLanguageSwitcher();
        
        // Initial page update
        this.updatePage();
    },
    
    /**
     * Add language switcher button to the page
     */
    addLanguageSwitcher: function() {
        // Check if switcher already exists
        if (document.getElementById('language-switcher')) {
            return;
        }
        
        // Create switcher button
        const switcher = document.createElement('button');
        switcher.id = 'language-switcher';
        switcher.className = 'language-switcher';
        switcher.textContent = this.currentLang === 'en' ? '中文' : 'English';
        switcher.setAttribute('aria-label', 'Switch language');
        
        // Add click handler
        switcher.addEventListener('click', () => {
            const newLang = this.currentLang === 'en' ? 'zh' : 'en';
            this.setLanguage(newLang);
        });
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                background: rgba(79, 70, 229, 0.9);
                color: white;
                border: none;
                border-radius: 20px;
                padding: 8px 16px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            }
            
            .language-switcher:hover {
                background: rgba(79, 70, 229, 1);
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
        `;
        
        // Add to page
        document.head.appendChild(style);
        document.body.appendChild(switcher);
    }
};

// Make i18n available globally
window.i18n = i18n;
