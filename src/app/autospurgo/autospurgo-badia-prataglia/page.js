import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Badia Prataglia",
    canonical: links.autospurgo["badia-prataglia"],
});
export default withBaseProps({ 
    title: "Autospurgo Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});
