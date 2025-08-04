import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Figline e Incisa Valdarno",
  canonical: links.servizi["pulizia-fognature"]["figline-e-incisa-valdarno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"}  
});
