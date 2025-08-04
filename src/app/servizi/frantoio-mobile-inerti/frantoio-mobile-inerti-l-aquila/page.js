import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti L'Aquila", 
    canonical: links.servizi["frantoio-mobile-inerti"]["l-aquila"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
