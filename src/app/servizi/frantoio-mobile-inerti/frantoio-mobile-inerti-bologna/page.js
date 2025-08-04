import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Bologna", 
    canonical: links.servizi["frantoio-mobile-inerti"]["bologna"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});
