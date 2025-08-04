import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Giovanni Valdarno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["san-giovanni-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Giovanni Valdarno", 
    locationNames: {label: "San Giovanni Valdarno", href: "san-giovanni-valdarno"}  
});
