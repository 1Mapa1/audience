import {fetchBuildingPending, fetchBuildingSuccess, fetchBuildingError} from 'redux_file/actions/buildingActions';
import { supabase } from 'repo/supabaseClient';

const fetchBuildings = () => {
    return async (dispatch) => {
        dispatch(fetchBuildingPending());
        await supabase.from('Buildings').select()
          .then(data => {
            
            dispatch(fetchBuildingSuccess(data.data));
          })
          .catch(error => {
            dispatch(fetchBuildingError(error));
          })
       
        
        } 
    }


export default fetchBuildings;