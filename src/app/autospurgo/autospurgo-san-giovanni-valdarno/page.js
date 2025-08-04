import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo San Giovanni Valdarno",
    canonical: links.autospurgo["san-giovanni-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
