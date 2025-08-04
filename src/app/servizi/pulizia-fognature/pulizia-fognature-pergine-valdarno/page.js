import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Pergine Valdarno",
  canonical: links.servizi["pulizia-fognature"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
