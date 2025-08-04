import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Figline Valdarno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["figline-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});
