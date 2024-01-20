'use client'
import { useState } from "react"
import NewChat from "./NewChat"
import { randomUUID } from "crypto"

function SideBar() {
    const [session, setSession] = useState(randomUUID)

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <NewChat />̨
                <ul className="menu w-screen rounded-box text-white">
                    <li>
                        <details open>
                            <summary>Parent</summary>
                            <ul className="ml-3">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li>
                                    <details open>
                                        <summary>Parent</summary>
                                        <ul>
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideBar