import Roact from "@rbxts/roact"

interface LinkProps {
	path: string
	state?: any
}

declare class Link extends Roact.Component<LinkProps> {
	constructor(props: LinkProps)
	public render(): Roact.Element
}

export = Link