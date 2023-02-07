import NxtHead from 'next/head'

type Props = {
    title?: string
}

export const Head = (props: Props) => {
    const {title = 'Todos'} = props
    return <NxtHead>
        <title>{title}</title>
    </NxtHead>
}