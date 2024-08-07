import { useNavigate } from 'react-router-dom';

//Import Needed Components
import CreateForm from "../../components/create/CreateForm";
import Footer from '../../components/HomePage/Footer';

//Import Server actions and utils
import { createCampaign } from '../../api/Campaign';

const Create = () => {
    const navigate = useNavigate();

    const handleSubmit = async (campaign: any) => {

        try {
            const response = await createCampaign(campaign);
            navigate(`/details/${response.data.data._id}`);
        } catch (error) {
            console.error('Error creating campaign:', error);
        }
    };

    return ( 
        <main>
            <CreateForm onSubmit={handleSubmit} />
            <Footer />
        </main>
     );
}
 
export default Create;