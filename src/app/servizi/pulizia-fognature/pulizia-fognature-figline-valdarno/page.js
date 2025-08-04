import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Figline Valdarno",
  canonical: links.servizi["pulizia-fognature"]["figline-valdarno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});
