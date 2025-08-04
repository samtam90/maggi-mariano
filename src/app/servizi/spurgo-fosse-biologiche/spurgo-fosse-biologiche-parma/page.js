import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Parma",
  canonical: links.servizi["spurgo-fosse-biologiche"]["parma"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
