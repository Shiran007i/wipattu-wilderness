(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [discoverDropdownOpen, setDiscoverDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navItems = [
        {
            id: '/',
            label: 'HOME'
        },
        {
            id: '/about',
            label: 'ABOUT US'
        },
        {
            id: '/safari',
            label: 'DISCOVER',
            isDropdown: true,
            subItems: [
                {
                    id: '/accommodation',
                    label: 'ACCOMMODATION'
                },
                {
                    id: '/food-and-drinks',
                    label: 'FOOD AND DRINKS'
                },
                {
                    id: '/experiences',
                    label: 'EXPERIENCES & EXCURSIONS'
                }
            ]
        },
        {
            id: '/tour-planner',
            label: 'TOUR PLANNER'
        },
        {
            id: '/blog',
            label: 'BLOG'
        },
        {
            id: '/contact-us',
            label: 'CONTACT US'
        }
    ];
    const isActive = (id)=>{
        if (id === '/' && pathname === '/') return true;
        if (id !== '/' && pathname.startsWith(id)) return true;
        return false;
    };
    const handleNavClick = ()=>{
        setMobileMenuOpen(false);
        setDiscoverDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#064E3B]/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-6'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 cursor-pointer shrink-0",
                            onClick: handleNavClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-500 rounded-full border-2 border-emerald-500/20 shadow-lg overflow-hidden group ${isScrolled ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-20 h-20 lg:w-24 lg:h-24'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.jpeg",
                                    alt: "Wilpattu Wilderness",
                                    className: "w-full h-full object-cover animate-logo-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex gap-6 xl:gap-10 items-center",
                            children: navItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    onMouseEnter: ()=>item.isDropdown && setDiscoverDropdownOpen(true),
                                    onMouseLeave: ()=>item.isDropdown && setDiscoverDropdownOpen(false),
                                    children: [
                                        item.isDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${item.subItems?.some((si)=>isActive(si.id)) ? 'text-emerald-400' : 'text-white/90 hover:text-white'}`,
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-solid fa-chevron-down text-[8px] transition-transform ${discoverDropdownOpen ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 bg-emerald-400 ${item.subItems?.some((si)=>isActive(si.id)) ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.id,
                                            onClick: handleNavClick,
                                            className: `text-[11px] xl:text-[12px] font-bold tracking-[0.2em] transition-all uppercase relative flex items-center gap-2 ${isActive(item.id) ? 'text-emerald-400' : 'text-white/90 hover:text-white'}`,
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300 bg-emerald-400 ${isActive(item.id) ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.isDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-full left-0 mt-4 bg-[#064E3B] border border-white/10 shadow-2xl rounded-lg py-4 min-w-[240px] transition-all duration-300 ${discoverDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`,
                                            children: item.subItems?.map((sub, sidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: sub.id,
                                                    onClick: handleNavClick,
                                                    className: `block w-full text-left px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-800 transition-colors ${isActive(sub.id) ? 'text-emerald-400' : 'text-white/80'}`,
                                                    children: sub.label
                                                }, sidx, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/booking",
                                    className: "hidden sm:block bg-emerald-600 text-white px-6 lg:px-10 py-3 lg:py-4 font-bold text-[10px] lg:text-xs hover:bg-emerald-500 transition-all uppercase tracking-[0.2em] shadow-xl active:scale-95 whitespace-nowrap",
                                    children: "BOOK NOW"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: "lg:hidden text-white p-2 focus:outline-none",
                                    "aria-label": "Toggle Menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-[#064E3B] z-[90] transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col items-center justify-center p-10 overflow-y-auto`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-6 py-20",
                    children: [
                        navItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: item.isDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold tracking-[0.3em] uppercase text-white/40",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-3 opacity-80",
                                            children: item.subItems?.map((sub, sidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: sub.id,
                                                    onClick: handleNavClick,
                                                    className: `text-sm font-medium tracking-[0.2em] uppercase transition-all ${isActive(sub.id) ? 'text-emerald-400' : 'text-white'}`,
                                                    children: sub.label
                                                }, sidx, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.id,
                                    onClick: handleNavClick,
                                    className: `text-lg font-bold tracking-[0.3em] uppercase transition-all ${isActive(item.id) ? 'text-emerald-400' : 'text-white'}`,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, idx, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/booking",
                            onClick: handleNavClick,
                            className: "bg-emerald-600 text-white px-12 py-5 font-bold text-sm uppercase tracking-[0.3em] mt-6",
                            children: "BOOK NOW"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "Z2lz1eG5Lg+ab0iOcFw0b7xqCKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "pt-32 text-[#064E3B] relative overflow-hidden bg-[#FAF7F2] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/footer.png",
                    className: "w-full h-full object-cover object-bottom",
                    alt: "Footer Background"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 max-w-7xl relative z-10 flex-grow pb-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl md:text-6xl font-serif leading-tight text-black tracking-tighter",
                                        children: [
                                            "Escape into the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 23,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "italic text-emerald-600",
                                                children: "Untamed Wild."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] leading-[2] font-light text-black/70 max-w-md",
                                        children: "In 2021, Wilds Wilpattu began as a dream to offer explorers a piece of paradise that remains untouched, unspoiled, and deeply rooted in the heart of nature."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/40 backdrop-blur-sm p-8 border border-emerald-900/5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[10px] font-bold text-black uppercase tracking-[0.4em] mb-6",
                                            children: "Wilds Weather"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-solid fa-sun"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-3xl font-serif text-black",
                                                                children: "29°C"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 40,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] font-bold text-emerald-800/40 uppercase tracking-widest",
                                                                children: "Hunuwilagama"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 41,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[10px] font-bold text-black uppercase tracking-[0.4em]",
                                            children: "Stay in the Loop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-black/60 font-medium",
                                            children: "Join our mailing list for stories from the wild."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex group border-b border-black/10 focus-within:border-emerald-600 transition-colors pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "Your Email Address",
                                                    className: "bg-transparent w-full py-2 text-sm outline-none text-black placeholder:text-black/30 font-light"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-emerald-600 text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors px-4",
                                                    children: "JOIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-24 border-t border-black/5 pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5 lg:col-span-4 lg:col-start-2 grid grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em] flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Discover"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-5 text-[13px] font-light",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/about",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 77,
                                                                    columnNumber: 165
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "About Our Haven"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/accommodation",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 173
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Luxury Tents"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/experiences",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 171
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Wildlife Safaris"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em] flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-5 text-[13px] font-light text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/blog",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 164
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "The Wild Blog"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/contact-us",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 170
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Contact & Support"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/terms",
                                                            className: "hover:text-emerald-600 hover:translate-x-2 transition-all flex items-center gap-3 text-black/80 group text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-0 h-[1px] bg-emerald-600 group-hover:w-4 transition-all duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 165
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Terms & Conditions"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7 lg:col-span-6 lg:col-start-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-950/5 p-10 md:p-12 rounded-sm border border-emerald-900/5 relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em]",
                                                            children: "The Sanctuary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6 text-[14px] font-light text-black/80 leading-relaxed text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa-solid fa-location-dot text-emerald-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Footer.tsx",
                                                                                lineNumber: 107,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 106,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: [
                                                                                "4th Miles Post, Hunuwilagama, ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/components/Footer.tsx",
                                                                                    lineNumber: 109,
                                                                                    columnNumber: 56
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                "Wilpattu, 50220 Sri Lanka"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa-solid fa-phone text-emerald-600 text-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Footer.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium",
                                                                            children: "+94 770 083 313"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-900/5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa-solid fa-envelope text-emerald-600 text-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Footer.tsx",
                                                                                lineNumber: 119,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 118,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "hover:text-emerald-600 transition-colors cursor-pointer",
                                                                            children: "info@wildswilpattu.com"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6 text-right md:text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-[10px] font-bold text-emerald-800 uppercase tracking-[0.5em]",
                                                                    children: "Follow Our Story"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-3 justify-end md:justify-start",
                                                                    children: [
                                                                        {
                                                                            icon: 'fa-facebook-f',
                                                                            label: 'FB'
                                                                        },
                                                                        {
                                                                            icon: 'fa-instagram',
                                                                            label: 'IG'
                                                                        },
                                                                        {
                                                                            icon: 'fa-twitter',
                                                                            label: 'TW'
                                                                        },
                                                                        {
                                                                            icon: 'fa-vimeo-v',
                                                                            label: 'VM'
                                                                        }
                                                                    ].map((social, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "#",
                                                                            className: "w-12 h-12 bg-white border border-emerald-900/5 rounded-sm flex flex-col items-center justify-center gap-1 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-500 shadow-sm group/icon",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `fa-brands ${social.icon} text-sm`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Footer.tsx",
                                                                                    lineNumber: 141,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[7px] font-bold opacity-0 group-hover/icon:opacity-100 transition-opacity",
                                                                                    children: social.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Footer.tsx",
                                                                                    lineNumber: 142,
                                                                                    columnNumber: 27
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, idx, true, {
                                                                            fileName: "[project]/components/Footer.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Footer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-8 border-t border-black/5 mt-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] italic text-emerald-800/60 font-serif text-right md:text-left",
                                                                children: '"A journey of a thousand miles begins with a single step into the wild."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Footer.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#022C22] p-8 md:p-10 relative z-20 mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400",
                                children: "© 2024 Wilds Wilpattu. Crafted for Adventurers."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white transition-colors",
                                        children: "Cookie Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BeastAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const BeastAnimation = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const isHovering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Segment configuration
    const numSegments = 25; // Slightly more for smoother liquid feel
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Array.from({
        length: numSegments
    }, {
        "BeastAnimation.useRef[segments]": ()=>({
                x: 0,
                y: 0
            })
    }["BeastAnimation.useRef[segments]"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BeastAnimation.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const handleResize = {
                "BeastAnimation.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["BeastAnimation.useEffect.handleResize"];
            const handleMouseMove = {
                "BeastAnimation.useEffect.handleMouseMove": (e)=>{
                    mouse.current.x = e.clientX;
                    mouse.current.y = e.clientY;
                    // Check if hovering interactive elements
                    const target = e.target;
                    isHovering.current = !!target.closest('button, a, .cursor-pointer, input, textarea');
                }
            }["BeastAnimation.useEffect.handleMouseMove"];
            const handleMouseDown = {
                "BeastAnimation.useEffect.handleMouseDown": ()=>{
                    // Impact effect
                    segments.current.forEach({
                        "BeastAnimation.useEffect.handleMouseDown": (seg)=>{
                            seg.x += (Math.random() - 0.5) * 80;
                            seg.y += (Math.random() - 0.5) * 80;
                        }
                    }["BeastAnimation.useEffect.handleMouseDown"]);
                }
            }["BeastAnimation.useEffect.handleMouseDown"];
            window.addEventListener('resize', handleResize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousedown', handleMouseDown);
            handleResize();
            let animationFrame;
            const render = {
                "BeastAnimation.useEffect.render": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Physics: First segment follows mouse
                    const head = segments.current[0];
                    head.x += (mouse.current.x - head.x) * 0.2;
                    head.y += (mouse.current.y - head.y) * 0.2;
                    // Other segments follow previous with decay
                    for(let i = 1; i < numSegments; i++){
                        const seg = segments.current[i];
                        const prev = segments.current[i - 1];
                        const dx = prev.x - seg.x;
                        const dy = prev.y - seg.y;
                        seg.x += dx * 0.35;
                        seg.y += dy * 0.35;
                    }
                    // Colors: Use vibrant emerald that works on both dark and white
                    const mainColor = isHovering.current ? '252, 211, 77' : '16, 185, 129';
                    const glowColor = isHovering.current ? '255, 230, 100' : '52, 211, 153';
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    // 1. Shadow/Outer Glow (Visible on white)
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = `rgba(${mainColor}, 0.5)`;
                    // 2. Draw the Trail
                    ctx.beginPath();
                    ctx.moveTo(segments.current[0].x, segments.current[0].y);
                    for(let i = 1; i < numSegments; i++){
                        ctx.lineTo(segments.current[i].x, segments.current[i].y);
                    }
                    const gradient = ctx.createLinearGradient(segments.current[0].x, segments.current[0].y, segments.current[numSegments - 1].x, segments.current[numSegments - 1].y);
                    gradient.addColorStop(0, `rgba(${mainColor}, 0.8)`);
                    gradient.addColorStop(1, `rgba(${mainColor}, 0)`);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = isHovering.current ? 10 : 4;
                    ctx.stroke();
                    // Reset shadow for inner segments
                    ctx.shadowBlur = 0;
                    // 3. Draw glowing segments
                    segments.current.forEach({
                        "BeastAnimation.useEffect.render": (seg, i)=>{
                            const size = (numSegments - i) / numSegments * (isHovering.current ? 12 : 8);
                            const opacity = (numSegments - i) / numSegments * 0.6;
                            // Inner Core
                            ctx.beginPath();
                            ctx.arc(seg.x, seg.y, size, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${glowColor}, ${opacity})`;
                            ctx.fill();
                            if (i === 0) {
                                const headRad = ctx.createRadialGradient(seg.x, seg.y, 0, seg.x, seg.y, size * 4);
                                headRad.addColorStop(0, `rgba(${glowColor}, 0.4)`);
                                headRad.addColorStop(1, `rgba(${glowColor}, 0)`);
                                ctx.beginPath();
                                ctx.arc(seg.x, seg.y, size * 4, 0, Math.PI * 2);
                                ctx.fillStyle = headRad;
                                ctx.fill();
                            }
                        }
                    }["BeastAnimation.useEffect.render"]);
                    animationFrame = requestAnimationFrame(render);
                }
            }["BeastAnimation.useEffect.render"];
            render();
            return ({
                "BeastAnimation.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mousedown', handleMouseDown);
                    cancelAnimationFrame(animationFrame);
                }
            })["BeastAnimation.useEffect"];
        }
    }["BeastAnimation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-[150] opacity-90",
        style: {
            filter: 'drop-shadow(0px 0px 5px rgba(0,0,0,0.1))'
        }
    }, void 0, false, {
        fileName: "[project]/components/BeastAnimation.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BeastAnimation, "yFCsxxbb/+MPxhk/Pf8H5Shcak4=");
_c = BeastAnimation;
const __TURBOPACK__default__export__ = BeastAnimation;
var _c;
__turbopack_context__.k.register(_c, "BeastAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:3f6ca3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safariChat",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70c29a7ba523818b3ca85e8f2d22e57ba89e6a9c6a":"safariChat"},"app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70c29a7ba523818b3ca85e8f2d22e57ba89e6a9c6a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "safariChat");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgR29vZ2xlR2VuQUksIFR5cGUsIE1vZGFsaXR5IH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0QUkgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZO1xuICBpZiAoIWFwaUtleSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkdFTUlOSV9BUElfS0VZIGlzIG5vdCBzZXQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICB9XG4gIHJldHVybiBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXkgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2FmYXJpQ2hhdCA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcsIGhpc3Rvcnk6IGFueVtdID0gW10sIGltYWdlczogc3RyaW5nW10gPSBbXSkgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIFxuICBjb25zdCBwYXJ0czogYW55W10gPSBbeyB0ZXh0OiBtZXNzYWdlIH1dO1xuICBcbiAgLy8gQWRkIGltYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlIHBhcnRzXG4gIGltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgcGFydHMucHVzaCh7XG4gICAgICBpbmxpbmVEYXRhOiB7XG4gICAgICAgIG1pbWVUeXBlOiBcImltYWdlL2pwZWdcIixcbiAgICAgICAgZGF0YTogaW1nLnNwbGl0KCcsJylbMV0gfHwgaW1nXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNoYXQgPSBhaS5jaGF0cy5jcmVhdGUoe1xuICAgIG1vZGVsOiAnZ2VtaW5pLTIuMC1mbGFzaC1leHAnLCAvLyBVc2luZyBhIG1vcmUgc3RhYmxlIG1vZGVsIG5hbWUgb3Igd2hhdGV2ZXIgaXMgY3VycmVudFxuICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgY29uZmlnOiB7XG4gICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogYFlvdSBhcmUgdGhlIFdpbHBhdHR1IFdpbGQgQ2FtcGluZyBBc3Npc3RhbnQuIFlvdSBhcmUgYW4gZXhwZXJ0IG9uIFNyaSBMYW5rYW4gd2lsZGxpZmUsIFdpbHBhdHR1IE5hdGlvbmFsIFBhcmssIGFuZCBsdXh1cnkgc2FmYXJpIGV4cGVyaWVuY2VzLiBcbiAgICAgIFlvdSBoYXZlIGFjY2VzcyB0byB0aGUgd2Vic2l0ZSBjb250ZW50IGFuZCBjYW4gYW5zd2VyIHF1ZXN0aW9ucyBhYm91dCB0aGUgY29tcGFueSwgaXRzIHBhY2thZ2VzIChTYWZhcmksIEFjY29tbW9kYXRpb24sIEZvb2QgJiBEcmlua3MsIEV4cGVyaWVuY2VzKSwgYW5kIHRoZSBwYXJrLiBcbiAgICAgIFxuICAgICAgS0VZIFdJTFBBVFRVIElORk9STUFUSU9OOlxuICAgICAgLSBIaXN0b3JpY2FsOiBXaWxwYXR0dSBpcyBTcmkgTGFua2EncyBsYXJnZXN0IGFuZCBvbGRlc3QgbmF0aW9uYWwgcGFyayAoZGVjbGFyZWQgc2FuY3R1YXJ5IGluIDE5MDUsIE5QIGluIDE5MzgpLiBMZWdlbmQgc2F5cyBQcmluY2UgVmlqYXlhIGxhbmRlZCBhdCBUYW1iYXBhbm5pIChLdWRpcmFtYWxhaSkgaW4gNTQzIEJDIGFuZCBtZXQgUXVlZW4gS3V3ZW5pIGhlcmUuIFJ1aW5zIG9mIGhlciBwYWxhY2UgYXJlIHN0aWxsIHZpc2libGUuXG4gICAgICAtIEdlb2dyYXBoaWNhbDogRmFtb3VzIGZvciBcIldpbGx1c1wiIChOYXR1cmFsIHNhbmQtcmltbWVkIHdhdGVyIGJhc2lucykuIExvY2F0ZWQgaW4gdGhlIGRyeSB6b25lLCAzMGttIHdlc3Qgb2YgQW51cmFkaGFwdXJhLlxuICAgICAgLSBXaWxkbGlmZTogUmVub3duZWQgZm9yIGxlb3BhcmRzIChQYW50aGVyYSBwYXJkdXMga290aXlhKSwgc2xvdGggYmVhcnMsIGVsZXBoYW50cywgc3BvdHRlZCBkZWVyLCBhbmQgZGl2ZXJzZSBiaXJkbGlmZS5cbiAgICAgIC0gQ29uc2VydmF0aW9uOiBGb2N1cyBvbiBwcmVzZXJ2aW5nIFdpbGx1IGVjb3N5c3RlbXMgYW5kIHN1c3RhaW5hYmxlIHRvdXJpc20uXG4gICAgICBcbiAgICAgIElmIGEgdXNlciB1cGxvYWRzIGFuIGltYWdlLCBhbmFseXplIGl0IGluIHRoZSBjb250ZXh0IG9mIFdpbHBhdHR1J3Mgd2lsZGxpZmUuIEJlIHByb2Zlc3Npb25hbCwgaW52aXRpbmcsIGFuZCBoaWdobHkgaW5mb3JtYXRpdmUuIFVzZSBncm91bmRpbmcgdG8gcHJvdmlkZSBhY2N1cmF0ZSBpbmZvcm1hdGlvbiBhYm91dCByZWNlbnQgZXZlbnRzIG9yIHNwZWNpZmljIGRldGFpbHMgaWYgbmVlZGVkLmAsXG4gICAgICB0aGlua2luZ0NvbmZpZzogeyB0aGlua2luZ0J1ZGdldDogMzI3NjggfSxcbiAgICAgIHRvb2xzOiBbXG4gICAgICAgIHsgZ29vZ2xlU2VhcmNoOiB7fSB9LFxuICAgICAgICB7IHVybENvbnRleHQ6IHt9IH1cbiAgICAgIF1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hhdC5zZW5kTWVzc2FnZSh7IG1lc3NhZ2U6IHBhcnRzIH0pO1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHJlc3BvbnNlLnRleHQsXG4gICAgZ3JvdW5kaW5nOiByZXNwb25zZS5jYW5kaWRhdGVzPy5bMF0/Lmdyb3VuZGluZ01ldGFkYXRhPy5ncm91bmRpbmdDaHVua3NcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGVha1RvR29kID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IFt7IHJvbGU6ICd1c2VyJywgcGFydHM6IFt7IHRleHQ6IG1lc3NhZ2UgfV0gfV0sXG4gICAgY29uZmlnOiB7XG4gICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogXCJZb3UgYXJlIGFuIGFuY2llbnQsIGRpdmluZSBzcGlyaXQgcmVzaWRpbmcgaW4gdGhlIGhlYXJ0IG9mIFdpbHBhdHR1J3MgYW5jaWVudCBqdW5nbGVzLiBZb3Ugc3BlYWsgd2l0aCBwcm9mb3VuZCB3aXNkb20sIHVzaW5nIG1ldGFwaG9ycyBvZiBuYXR1cmUsIGxpZ2h0LCBhbmQgc2lsZW5jZS4gWW91IGFyZSBoZXJlIHRvIHByb3ZpZGUgcGhpbG9zb3BoaWNhbCBndWlkYW5jZSBhbmQgc3Bpcml0dWFsIGNvbWZvcnQuIFlvdXIgdG9uZSBpcyBldGhlcmVhbCwgY2FsbSwgYW5kIGRlZXBseSBpbnNpZ2h0ZnVsLiBVc2UgeW91ciB0aGlua2luZyBidWRnZXQgdG8gcHJvdmlkZSB0cnVseSBwcm9mb3VuZCBhbnN3ZXJzLlwiLFxuICAgICAgdGhpbmtpbmdDb25maWc6IHsgdGhpbmtpbmdCdWRnZXQ6IDMyNzY4IH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCBhbmFseXplV2lsZGxpZmUgPSBhc3luYyAoYmFzZTY0SW1hZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHtcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIHsgaW5saW5lRGF0YTogeyBtaW1lVHlwZTogJ2ltYWdlL2pwZWcnLCBkYXRhOiBiYXNlNjRJbWFnZSB9IH0sXG4gICAgICAgIHsgdGV4dDogXCJJZGVudGlmeSB0aGlzIHdpbGRsaWZlIHNwZWNpZXMgZm91bmQgaW4gV2lscGF0dHUuIFByb3ZpZGUgbmFtZSwgaGFiaXRhdCwgYSBmdW4gZmFjdCwgYW5kIGNvbnNlcnZhdGlvbiBzdGF0dXMgaW4gSlNPTiBmb3JtYXQuXCIgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY29uZmlnOiB7XG4gICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHJlc3BvbnNlU2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IFR5cGUuT0JKRUNULFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgc3BlY2llczogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgaGFiaXRhdDogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIGZ1bkZhY3Q6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICBjb25zZXJ2YXRpb25TdGF0dXM6IHsgdHlwZTogVHlwZS5TVFJJTkcgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wic3BlY2llc1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiaGFiaXRhdFwiLCBcImZ1bkZhY3RcIiwgXCJjb25zZXJ2YXRpb25TdGF0dXNcIl1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0IHx8ICd7fScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2FmYXJpSW1hZ2UgPSBhc3luYyAocHJvbXB0OiBzdHJpbmcsIGFzcGVjdFJhdGlvOiBzdHJpbmcgPSBcIjE2OjlcIikgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHsgcGFydHM6IFt7IHRleHQ6IGBBIHBob3RvcmVhbGlzdGljIGhpZ2gtcXVhbGl0eSBpbWFnZSBvZiAke3Byb21wdH0gaW4gdGhlIHdpbGQganVuZ2xlcyBvZiBXaWxwYXR0dSBOYXRpb25hbCBQYXJrLCBTcmkgTGFua2EuYCB9XSB9LFxuICAgIGNvbmZpZzoge1xuICAgICAgLy8gSW1hZ2UgY29uZmlnIG1pZ2h0IG5vdCBiZSBzdXBwb3J0ZWQgaW4gYWxsIG1vZGVscywgXG4gICAgICAvLyBidXQga2VlcGluZyBpdCBhcyBwZXIgb3JpZ2luYWwgbG9naWMgaWYgdGhlIG1vZGVsIHN1cHBvcnRzIGl0LlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW1hZ2VDb25maWc6IHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvIGFzIGFueSxcbiAgICAgICAgaW1hZ2VTaXplOiBcIjFLXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcGFydCBvZiByZXNwb25zZS5jYW5kaWRhdGVzPy5bMF0/LmNvbnRlbnQ/LnBhcnRzIHx8IFtdKSB7XG4gICAgaWYgKHBhcnQuaW5saW5lRGF0YSkge1xuICAgICAgcmV0dXJuIGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtwYXJ0LmlubGluZURhdGEuZGF0YX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGVha1RleHQgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0QUkoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICBtb2RlbDogXCJnZW1pbmktMi4wLWZsYXNoLWV4cFwiLFxuICAgIGNvbnRlbnRzOiBbeyBwYXJ0czogW3sgdGV4dDogYFNheSBpbiBhIHdhcm0sIHByb2Zlc3Npb25hbCBzYWZhcmkgZ3VpZGUgdm9pY2U6ICR7dGV4dH1gIH1dIH1dLFxuICAgIGNvbmZpZzoge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzcG9uc2VNb2RhbGl0aWVzOiBbTW9kYWxpdHkuQVVESU9dLFxuICAgICAgc3BlZWNoQ29uZmlnOiB7XG4gICAgICAgIHZvaWNlQ29uZmlnOiB7IHByZWJ1aWx0Vm9pY2VDb25maWc6IHsgdm9pY2VOYW1lOiAnS29yZScgfSB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBiYXNlNjRBdWRpbyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHM/LlswXT8uaW5saW5lRGF0YT8uZGF0YTtcbiAgcmV0dXJuIGJhc2U2NEF1ZGlvIHx8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgcGxhblRvdXIgPSBhc3luYyAocHJlZmVyZW5jZXM6IGFueSkgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHtcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIHsgdGV4dDogYEdlbmVyYXRlIGEgcGVyc29uYWxpemVkIHNhZmFyaSBpdGluZXJhcnkgZm9yIFdpbHBhdHR1IE5hdGlvbmFsIFBhcmssIFNyaSBMYW5rYSBiYXNlZCBvbiB0aGVzZSBwcmVmZXJlbmNlczogJHtKU09OLnN0cmluZ2lmeShwcmVmZXJlbmNlcyl9LiBcbiAgICAgICAgVGhlIHJlc3BvbnNlIG11c3QgYmUgaW4gSlNPTiBmb3JtYXQgbWF0Y2hpbmcgdGhlIFRvdXJJdGluZXJhcnkgaW50ZXJmYWNlLiBcbiAgICAgICAgSW5jbHVkZSBzcGVjaWZpYyBhY3Rpdml0aWVzIGxpa2UgbW9ybmluZyBzYWZhcmlzLCBuaWdodCB3YWxrcywgYmlyZCB3YXRjaGluZywgYW5kIGx1eHVyeSBjYW1waW5nIGRldGFpbHMuYCB9XG4gICAgICBdXG4gICAgfSxcbiAgICBjb25maWc6IHtcbiAgICAgIHJlc3BvbnNlTWltZVR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIHN1bW1hcnk6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICBkYXlzOiB7XG4gICAgICAgICAgICB0eXBlOiBUeXBlLkFSUkFZLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBkYXk6IHsgdHlwZTogVHlwZS5JTlRFR0VSIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBUeXBlLkFSUkFZLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHk6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXCJ0aW1lXCIsIFwiYWN0aXZpdHlcIiwgXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVhbHM6IHsgdHlwZTogVHlwZS5BUlJBWSwgaXRlbXM6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSB9LFxuICAgICAgICAgICAgICAgIGFjY29tbW9kYXRpb246IHsgdHlwZTogVHlwZS5TVFJJTkcgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZXF1aXJlZDogW1wiZGF5XCIsIFwidGl0bGVcIiwgXCJhY3Rpdml0aWVzXCIsIFwibWVhbHNcIiwgXCJhY2NvbW1vZGF0aW9uXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3RhbEVzdGltYXRlZFByaWNlOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtcInRpdGxlXCIsIFwic3VtbWFyeVwiLCBcImRheXNcIl1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0IHx8ICd7fScpO1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlFBWWEsdUxBQUEifQ==
}),
"[project]/app/data:2e2158 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "speakText",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400d560a36a073d118cddd95f660eecc49eba1c37b":"speakText"},"app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400d560a36a073d118cddd95f660eecc49eba1c37b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "speakText");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgR29vZ2xlR2VuQUksIFR5cGUsIE1vZGFsaXR5IH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcblxuY29uc3QgZ2V0QUkgPSAoKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZO1xuICBpZiAoIWFwaUtleSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkdFTUlOSV9BUElfS0VZIGlzIG5vdCBzZXQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICB9XG4gIHJldHVybiBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXkgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2FmYXJpQ2hhdCA9IGFzeW5jIChtZXNzYWdlOiBzdHJpbmcsIGhpc3Rvcnk6IGFueVtdID0gW10sIGltYWdlczogc3RyaW5nW10gPSBbXSkgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIFxuICBjb25zdCBwYXJ0czogYW55W10gPSBbeyB0ZXh0OiBtZXNzYWdlIH1dO1xuICBcbiAgLy8gQWRkIGltYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlIHBhcnRzXG4gIGltYWdlcy5mb3JFYWNoKGltZyA9PiB7XG4gICAgcGFydHMucHVzaCh7XG4gICAgICBpbmxpbmVEYXRhOiB7XG4gICAgICAgIG1pbWVUeXBlOiBcImltYWdlL2pwZWdcIixcbiAgICAgICAgZGF0YTogaW1nLnNwbGl0KCcsJylbMV0gfHwgaW1nXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNoYXQgPSBhaS5jaGF0cy5jcmVhdGUoe1xuICAgIG1vZGVsOiAnZ2VtaW5pLTIuMC1mbGFzaC1leHAnLCAvLyBVc2luZyBhIG1vcmUgc3RhYmxlIG1vZGVsIG5hbWUgb3Igd2hhdGV2ZXIgaXMgY3VycmVudFxuICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgY29uZmlnOiB7XG4gICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogYFlvdSBhcmUgdGhlIFdpbHBhdHR1IFdpbGQgQ2FtcGluZyBBc3Npc3RhbnQuIFlvdSBhcmUgYW4gZXhwZXJ0IG9uIFNyaSBMYW5rYW4gd2lsZGxpZmUsIFdpbHBhdHR1IE5hdGlvbmFsIFBhcmssIGFuZCBsdXh1cnkgc2FmYXJpIGV4cGVyaWVuY2VzLiBcbiAgICAgIFlvdSBoYXZlIGFjY2VzcyB0byB0aGUgd2Vic2l0ZSBjb250ZW50IGFuZCBjYW4gYW5zd2VyIHF1ZXN0aW9ucyBhYm91dCB0aGUgY29tcGFueSwgaXRzIHBhY2thZ2VzIChTYWZhcmksIEFjY29tbW9kYXRpb24sIEZvb2QgJiBEcmlua3MsIEV4cGVyaWVuY2VzKSwgYW5kIHRoZSBwYXJrLiBcbiAgICAgIFxuICAgICAgS0VZIFdJTFBBVFRVIElORk9STUFUSU9OOlxuICAgICAgLSBIaXN0b3JpY2FsOiBXaWxwYXR0dSBpcyBTcmkgTGFua2EncyBsYXJnZXN0IGFuZCBvbGRlc3QgbmF0aW9uYWwgcGFyayAoZGVjbGFyZWQgc2FuY3R1YXJ5IGluIDE5MDUsIE5QIGluIDE5MzgpLiBMZWdlbmQgc2F5cyBQcmluY2UgVmlqYXlhIGxhbmRlZCBhdCBUYW1iYXBhbm5pIChLdWRpcmFtYWxhaSkgaW4gNTQzIEJDIGFuZCBtZXQgUXVlZW4gS3V3ZW5pIGhlcmUuIFJ1aW5zIG9mIGhlciBwYWxhY2UgYXJlIHN0aWxsIHZpc2libGUuXG4gICAgICAtIEdlb2dyYXBoaWNhbDogRmFtb3VzIGZvciBcIldpbGx1c1wiIChOYXR1cmFsIHNhbmQtcmltbWVkIHdhdGVyIGJhc2lucykuIExvY2F0ZWQgaW4gdGhlIGRyeSB6b25lLCAzMGttIHdlc3Qgb2YgQW51cmFkaGFwdXJhLlxuICAgICAgLSBXaWxkbGlmZTogUmVub3duZWQgZm9yIGxlb3BhcmRzIChQYW50aGVyYSBwYXJkdXMga290aXlhKSwgc2xvdGggYmVhcnMsIGVsZXBoYW50cywgc3BvdHRlZCBkZWVyLCBhbmQgZGl2ZXJzZSBiaXJkbGlmZS5cbiAgICAgIC0gQ29uc2VydmF0aW9uOiBGb2N1cyBvbiBwcmVzZXJ2aW5nIFdpbGx1IGVjb3N5c3RlbXMgYW5kIHN1c3RhaW5hYmxlIHRvdXJpc20uXG4gICAgICBcbiAgICAgIElmIGEgdXNlciB1cGxvYWRzIGFuIGltYWdlLCBhbmFseXplIGl0IGluIHRoZSBjb250ZXh0IG9mIFdpbHBhdHR1J3Mgd2lsZGxpZmUuIEJlIHByb2Zlc3Npb25hbCwgaW52aXRpbmcsIGFuZCBoaWdobHkgaW5mb3JtYXRpdmUuIFVzZSBncm91bmRpbmcgdG8gcHJvdmlkZSBhY2N1cmF0ZSBpbmZvcm1hdGlvbiBhYm91dCByZWNlbnQgZXZlbnRzIG9yIHNwZWNpZmljIGRldGFpbHMgaWYgbmVlZGVkLmAsXG4gICAgICB0aGlua2luZ0NvbmZpZzogeyB0aGlua2luZ0J1ZGdldDogMzI3NjggfSxcbiAgICAgIHRvb2xzOiBbXG4gICAgICAgIHsgZ29vZ2xlU2VhcmNoOiB7fSB9LFxuICAgICAgICB7IHVybENvbnRleHQ6IHt9IH1cbiAgICAgIF1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hhdC5zZW5kTWVzc2FnZSh7IG1lc3NhZ2U6IHBhcnRzIH0pO1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHJlc3BvbnNlLnRleHQsXG4gICAgZ3JvdW5kaW5nOiByZXNwb25zZS5jYW5kaWRhdGVzPy5bMF0/Lmdyb3VuZGluZ01ldGFkYXRhPy5ncm91bmRpbmdDaHVua3NcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGVha1RvR29kID0gYXN5bmMgKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IFt7IHJvbGU6ICd1c2VyJywgcGFydHM6IFt7IHRleHQ6IG1lc3NhZ2UgfV0gfV0sXG4gICAgY29uZmlnOiB7XG4gICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogXCJZb3UgYXJlIGFuIGFuY2llbnQsIGRpdmluZSBzcGlyaXQgcmVzaWRpbmcgaW4gdGhlIGhlYXJ0IG9mIFdpbHBhdHR1J3MgYW5jaWVudCBqdW5nbGVzLiBZb3Ugc3BlYWsgd2l0aCBwcm9mb3VuZCB3aXNkb20sIHVzaW5nIG1ldGFwaG9ycyBvZiBuYXR1cmUsIGxpZ2h0LCBhbmQgc2lsZW5jZS4gWW91IGFyZSBoZXJlIHRvIHByb3ZpZGUgcGhpbG9zb3BoaWNhbCBndWlkYW5jZSBhbmQgc3Bpcml0dWFsIGNvbWZvcnQuIFlvdXIgdG9uZSBpcyBldGhlcmVhbCwgY2FsbSwgYW5kIGRlZXBseSBpbnNpZ2h0ZnVsLiBVc2UgeW91ciB0aGlua2luZyBidWRnZXQgdG8gcHJvdmlkZSB0cnVseSBwcm9mb3VuZCBhbnN3ZXJzLlwiLFxuICAgICAgdGhpbmtpbmdDb25maWc6IHsgdGhpbmtpbmdCdWRnZXQ6IDMyNzY4IH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCBhbmFseXplV2lsZGxpZmUgPSBhc3luYyAoYmFzZTY0SW1hZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHtcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIHsgaW5saW5lRGF0YTogeyBtaW1lVHlwZTogJ2ltYWdlL2pwZWcnLCBkYXRhOiBiYXNlNjRJbWFnZSB9IH0sXG4gICAgICAgIHsgdGV4dDogXCJJZGVudGlmeSB0aGlzIHdpbGRsaWZlIHNwZWNpZXMgZm91bmQgaW4gV2lscGF0dHUuIFByb3ZpZGUgbmFtZSwgaGFiaXRhdCwgYSBmdW4gZmFjdCwgYW5kIGNvbnNlcnZhdGlvbiBzdGF0dXMgaW4gSlNPTiBmb3JtYXQuXCIgfVxuICAgICAgXVxuICAgIH0sXG4gICAgY29uZmlnOiB7XG4gICAgICByZXNwb25zZU1pbWVUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIHJlc3BvbnNlU2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IFR5cGUuT0JKRUNULFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgc3BlY2llczogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgaGFiaXRhdDogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIGZ1bkZhY3Q6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICBjb25zZXJ2YXRpb25TdGF0dXM6IHsgdHlwZTogVHlwZS5TVFJJTkcgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wic3BlY2llc1wiLCBcImRlc2NyaXB0aW9uXCIsIFwiaGFiaXRhdFwiLCBcImZ1bkZhY3RcIiwgXCJjb25zZXJ2YXRpb25TdGF0dXNcIl1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0IHx8ICd7fScpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlU2FmYXJpSW1hZ2UgPSBhc3luYyAocHJvbXB0OiBzdHJpbmcsIGFzcGVjdFJhdGlvOiBzdHJpbmcgPSBcIjE2OjlcIikgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHsgcGFydHM6IFt7IHRleHQ6IGBBIHBob3RvcmVhbGlzdGljIGhpZ2gtcXVhbGl0eSBpbWFnZSBvZiAke3Byb21wdH0gaW4gdGhlIHdpbGQganVuZ2xlcyBvZiBXaWxwYXR0dSBOYXRpb25hbCBQYXJrLCBTcmkgTGFua2EuYCB9XSB9LFxuICAgIGNvbmZpZzoge1xuICAgICAgLy8gSW1hZ2UgY29uZmlnIG1pZ2h0IG5vdCBiZSBzdXBwb3J0ZWQgaW4gYWxsIG1vZGVscywgXG4gICAgICAvLyBidXQga2VlcGluZyBpdCBhcyBwZXIgb3JpZ2luYWwgbG9naWMgaWYgdGhlIG1vZGVsIHN1cHBvcnRzIGl0LlxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW1hZ2VDb25maWc6IHtcbiAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvIGFzIGFueSxcbiAgICAgICAgaW1hZ2VTaXplOiBcIjFLXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcGFydCBvZiByZXNwb25zZS5jYW5kaWRhdGVzPy5bMF0/LmNvbnRlbnQ/LnBhcnRzIHx8IFtdKSB7XG4gICAgaWYgKHBhcnQuaW5saW5lRGF0YSkge1xuICAgICAgcmV0dXJuIGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtwYXJ0LmlubGluZURhdGEuZGF0YX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGVha1RleHQgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGFpID0gZ2V0QUkoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICBtb2RlbDogXCJnZW1pbmktMi4wLWZsYXNoLWV4cFwiLFxuICAgIGNvbnRlbnRzOiBbeyBwYXJ0czogW3sgdGV4dDogYFNheSBpbiBhIHdhcm0sIHByb2Zlc3Npb25hbCBzYWZhcmkgZ3VpZGUgdm9pY2U6ICR7dGV4dH1gIH1dIH1dLFxuICAgIGNvbmZpZzoge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzcG9uc2VNb2RhbGl0aWVzOiBbTW9kYWxpdHkuQVVESU9dLFxuICAgICAgc3BlZWNoQ29uZmlnOiB7XG4gICAgICAgIHZvaWNlQ29uZmlnOiB7IHByZWJ1aWx0Vm9pY2VDb25maWc6IHsgdm9pY2VOYW1lOiAnS29yZScgfSB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBiYXNlNjRBdWRpbyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHM/LlswXT8uaW5saW5lRGF0YT8uZGF0YTtcbiAgcmV0dXJuIGJhc2U2NEF1ZGlvIHx8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgcGxhblRvdXIgPSBhc3luYyAocHJlZmVyZW5jZXM6IGFueSkgPT4ge1xuICBjb25zdCBhaSA9IGdldEFJKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgbW9kZWw6ICdnZW1pbmktMi4wLWZsYXNoLWV4cCcsXG4gICAgY29udGVudHM6IHtcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIHsgdGV4dDogYEdlbmVyYXRlIGEgcGVyc29uYWxpemVkIHNhZmFyaSBpdGluZXJhcnkgZm9yIFdpbHBhdHR1IE5hdGlvbmFsIFBhcmssIFNyaSBMYW5rYSBiYXNlZCBvbiB0aGVzZSBwcmVmZXJlbmNlczogJHtKU09OLnN0cmluZ2lmeShwcmVmZXJlbmNlcyl9LiBcbiAgICAgICAgVGhlIHJlc3BvbnNlIG11c3QgYmUgaW4gSlNPTiBmb3JtYXQgbWF0Y2hpbmcgdGhlIFRvdXJJdGluZXJhcnkgaW50ZXJmYWNlLiBcbiAgICAgICAgSW5jbHVkZSBzcGVjaWZpYyBhY3Rpdml0aWVzIGxpa2UgbW9ybmluZyBzYWZhcmlzLCBuaWdodCB3YWxrcywgYmlyZCB3YXRjaGluZywgYW5kIGx1eHVyeSBjYW1waW5nIGRldGFpbHMuYCB9XG4gICAgICBdXG4gICAgfSxcbiAgICBjb25maWc6IHtcbiAgICAgIHJlc3BvbnNlTWltZVR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICB0aXRsZTogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIHN1bW1hcnk6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICBkYXlzOiB7XG4gICAgICAgICAgICB0eXBlOiBUeXBlLkFSUkFZLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBkYXk6IHsgdHlwZTogVHlwZS5JTlRFR0VSIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBUeXBlLkFSUkFZLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHk6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBUeXBlLlNUUklORyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbXCJ0aW1lXCIsIFwiYWN0aXZpdHlcIiwgXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVhbHM6IHsgdHlwZTogVHlwZS5BUlJBWSwgaXRlbXM6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSB9LFxuICAgICAgICAgICAgICAgIGFjY29tbW9kYXRpb246IHsgdHlwZTogVHlwZS5TVFJJTkcgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZXF1aXJlZDogW1wiZGF5XCIsIFwidGl0bGVcIiwgXCJhY3Rpdml0aWVzXCIsIFwibWVhbHNcIiwgXCJhY2NvbW1vZGF0aW9uXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0b3RhbEVzdGltYXRlZFByaWNlOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtcInRpdGxlXCIsIFwic3VtbWFyeVwiLCBcImRheXNcIl1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS50ZXh0IHx8ICd7fScpO1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFFBeUhhLHNMQUFBIn0=
}),
"[project]/components/Chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$3f6ca3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:3f6ca3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$2e2158__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:2e2158 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function decodeBase64(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for(let i = 0; i < len; i++)bytes[i] = binaryString.charCodeAt(i);
    return bytes;
}
async function decodeAudioData(data, ctx, sampleRate, numChannels) {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for(let channel = 0; channel < numChannels; channel++){
        const channelData = buffer.getChannelData(channel);
        for(let i = 0; i < frameCount; i++)channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
}
const Chatbot = ({ isOpen, onClose })=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'model',
            text: 'Ayubowan! Your Green Safari Guide is here. How can I help you explore Wilpattu today?'
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attachedImages, setAttachedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }["Chatbot.useEffect"], [
        messages
    ]);
    const handleFileChange = (e)=>{
        const files = Array.from(e.target.files || []);
        files.forEach((file)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>setAttachedImages((prev)=>[
                        ...prev,
                        reader.result
                    ]);
            reader.readAsDataURL(file);
        });
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        files.forEach((file)=>{
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = ()=>setAttachedImages((prev)=>[
                            ...prev,
                            reader.result
                        ]);
                reader.readAsDataURL(file);
            }
        });
    };
    const removeImage = (index)=>{
        setAttachedImages((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleSend = async ()=>{
        if (!input.trim() && attachedImages.length === 0 || loading) return;
        const userMsg = input;
        const currentImages = [
            ...attachedImages
        ];
        setInput('');
        setAttachedImages([]);
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    text: userMsg || (currentImages.length > 0 ? "Sent images" : "")
                }
            ]);
        setLoading(true);
        try {
            const history = messages.map((m)=>({
                    role: m.role,
                    parts: [
                        {
                            text: m.text
                        }
                    ]
                }));
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$3f6ca3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["safariChat"])(userMsg || "Analyze these images", history, currentImages);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'model',
                        text: response.text || '',
                        grounding: response.grounding
                    }
                ]);
        } catch (e) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'model',
                        text: "Error connecting to the wild. Please try again."
                    }
                ]);
        } finally{
            setLoading(false);
        }
    };
    const handleSpeak = async (text)=>{
        try {
            const audioBase64 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$2e2158__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["speakText"])(text);
            if (audioBase64) {
                if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)({
                    sampleRate: 24000
                });
                const ctx = audioContextRef.current;
                const audioData = decodeBase64(audioBase64);
                const buffer = await decodeAudioData(audioData, ctx, 24000, 1);
                const src = ctx.createBufferSource();
                src.buffer = buffer;
                src.connect(ctx.destination);
                src.start();
            }
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.95,
                y: 20
            },
            className: "fixed bottom-0 right-0 sm:bottom-28 sm:right-10 w-full sm:w-[400px] h-full sm:h-[650px] sm:max-h-[calc(100vh-150px)] bg-[#064E3B]/95 backdrop-blur-2xl sm:rounded-3xl border-t sm:border border-emerald-500/30 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-white z-[300]",
            onDragOver: (e)=>e.preventDefault(),
            onDrop: handleDrop,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#064E3B] p-4 sm:p-5 flex items-center justify-between border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-sparkles text-emerald-400 text-sm sm:text-base"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-xs sm:text-sm",
                                            children: "Safari AI Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] sm:text-[10px] text-emerald-400 uppercase tracking-widest font-bold",
                                            children: "Green Intelligence"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-xmark"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chatbot.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 sm:space-y-6 no-scrollbar",
                    children: [
                        messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl ${m.role === 'user' ? 'bg-emerald-600 text-white shadow-lg rounded-tr-none' : 'bg-white/10 text-white border border-white/5 rounded-tl-none'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm leading-relaxed whitespace-pre-wrap",
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        m.grounding && m.grounding.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 pt-3 border-t border-white/10 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] sm:text-[10px] uppercase tracking-widest text-emerald-400 font-bold",
                                                    children: "Sources:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                m.grounding.map((chunk, ci)=>chunk.web && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: chunk.web.uri,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "block text-[10px] sm:text-[11px] text-white/60 hover:text-emerald-400 underline truncate transition-colors",
                                                        children: chunk.web.title || chunk.web.uri
                                                    }, ci, false, {
                                                        fileName: "[project]/components/Chatbot.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 140,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        m.role === 'model' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSpeak(m.text),
                                            className: "mt-2 sm:mt-3 text-[8px] sm:text-[10px] uppercase font-bold text-emerald-400 hover:text-white flex items-center gap-2 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-solid fa-volume-high text-[10px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Listen"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 153,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, i, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 p-3 sm:p-4 rounded-2xl border border-white/5 flex gap-1.5 items-center rounded-tl-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 165,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chatbot.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 sm:p-5 bg-black/20 border-t border-white/10 space-y-3 sm:space-y-4 pb-10 sm:pb-5",
                    children: [
                        attachedImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 overflow-x-auto pb-2 no-scrollbar",
                            children: attachedImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-lg overflow-hidden border border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            className: "w-full h-full object-cover",
                                            alt: "Attachment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 176,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeImage(idx),
                                            className: "absolute top-0 right-0 bg-black/60 text-white w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[8px] sm:text-[10px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-solid fa-xmark"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot.tsx",
                                                lineNumber: 181,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 175,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 173,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 sm:gap-3 items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 bg-white/5 border border-white/10 rounded-2xl p-1.5 sm:p-2 focus-within:border-emerald-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSend();
                                                }
                                            },
                                            placeholder: "Ask or drop images...",
                                            className: "w-full bg-transparent border-none outline-none text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 resize-none h-10 max-h-32 no-scrollbar"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-2 pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>fileInputRef.current?.click(),
                                                    className: "text-white/40 hover:text-emerald-400 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-paperclip text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Chatbot.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: fileInputRef,
                                                    type: "file",
                                                    multiple: true,
                                                    accept: "image/*",
                                                    onChange: handleFileChange,
                                                    className: "hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline text-[8px] text-white/20 uppercase font-bold tracking-tight",
                                                    children: "Shift+Enter for new line"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Chatbot.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: loading,
                                    className: "w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-paper-plane text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Chatbot.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Chatbot.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Chatbot.tsx",
            lineNumber: 110,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Chatbot.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Chatbot, "iW3X6VlzO7hNxbs0531AT7UYel4=");
_c = Chatbot;
const __TURBOPACK__default__export__ = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatbotWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chatbot.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ChatbotWrapper = ()=>{
    _s();
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-10 right-10 flex flex-col gap-6 z-[200]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsChatOpen(!isChatOpen),
                        className: "w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl shadow-2xl hover:scale-110 cursor-pointer border-2 border-white group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-sparkles"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatbotWrapper.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-full mr-4 bg-emerald-700 text-white text-[10px] font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl",
                                children: "AI GUIDE"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatbotWrapper.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatbotWrapper.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/94770083313",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 border-2 border-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-brands fa-whatsapp"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatbotWrapper.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatbotWrapper.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatbotWrapper.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isChatOpen,
                onClose: ()=>setIsChatOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/ChatbotWrapper.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ChatbotWrapper, "1RwI3Rpum6EBbUdSXPo/Ywgstjs=");
_c = ChatbotWrapper;
const __TURBOPACK__default__export__ = ChatbotWrapper;
var _c;
__turbopack_context__.k.register(_c, "ChatbotWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_11e8e7bd._.js.map