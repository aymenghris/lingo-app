"use client"

import {
	createContext,
	type FC,
	type ReactNode,
	useContext,
	useMemo,
} from "react"

interface UnitContextType {
	unitPlacement: number
	totalLessonsCount: number
}

const UnitContext = createContext<UnitContextType | undefined>(undefined)

interface UnitProviderProps {
	unitPlacement: number
	totalLessons: number
	children: ReactNode
}

export const UnitProvider: FC<UnitProviderProps> = ({
	unitPlacement,
	totalLessons,
	children,
}: UnitProviderProps) => {
	const contextValue = useMemo(
		() => ({
			unitPlacement,
			totalLessonsCount: totalLessons,
		}),
		[unitPlacement, totalLessons],
	)

	return (
		<UnitContext.Provider value={contextValue}>
			{children}
		</UnitContext.Provider>
	)
}

export const useUnitContext = () => {
	const context = useContext(UnitContext)

	if (context === undefined) {
		throw new Error("useUnitContext must be used within a UnitProvider")
	}

	return context
}
