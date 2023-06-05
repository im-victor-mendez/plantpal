interface Page {
    element: React.ReactNode
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    name: string
    path: string
}

const Pages: Array<Page> = []

export default Pages