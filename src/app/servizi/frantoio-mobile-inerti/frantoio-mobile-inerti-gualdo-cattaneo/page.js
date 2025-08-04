import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Gualdo Cattaneo", 
    canonical: links.servizi["frantoio-mobile-inerti"]["gualdo-cattaneo"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});
