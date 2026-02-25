"use client"

import dynamic from "next/dynamic"

const AdminApp = dynamic(() => import("@admin/AdminApp"), { ssr: false })

const AdminPage = () => {
	return <AdminApp />
}

export default AdminPage
