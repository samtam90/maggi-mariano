import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Rigutino", 
    canonical: links.servizi["frantoio-mobile-inerti"]["rigutino"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});
