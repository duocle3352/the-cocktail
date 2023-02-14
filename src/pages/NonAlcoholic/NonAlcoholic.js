import { useGetNonAlcoholic } from '~/hooks';
import { SectionHeader } from '~/components/SectionHeader';
import { Loading } from '~/components/Loading';
import { Paginate } from '~/components/Paginate';

function NonAlcoholic() {
    const items = useGetNonAlcoholic();

    return (
        <>
            <SectionHeader title="Non Alcoholic" />
            {items ? <Paginate items={items} pageSize={20} /> : <Loading className="text-5xl" />}
        </>
    );
}

export default NonAlcoholic;
