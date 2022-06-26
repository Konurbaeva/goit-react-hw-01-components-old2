/* import { 
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableHeadRow,
    TableHeader,
    TableBodyText,
} from '../ui/table'

import transactionsData from '../../components/mock/transactions.json'
import { Container } from 'components/ui/Container'

export const TransactionTable = () => {
    return (
        <Container>
<Table>
    <TableHead>
        <TableHeadRow>
            <TableHeader>type</TableHeader>
            <TableHeader>amount</TableHeader>
            <TableHeader>currency</TableHeader>
        </TableHeadRow>
    </TableHead>
    <TableBody>
        {transactionsData.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
                <TableBodyText>{type}</TableBodyText>
                <TableBodyText>{amount}</TableBodyText>
                <TableBodyText>{currency}</TableBodyText>
            </TableRow>
        ))}
    </TableBody>
</Table>
   </Container>
    )
} */