import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pergine Valdarno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
