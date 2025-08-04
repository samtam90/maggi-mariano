import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Campello sul Clitunno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});
