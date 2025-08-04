import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Castel Focognano", 
    canonical: links.servizi["frantoio-mobile-inerti"]["castel-focognano"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});
