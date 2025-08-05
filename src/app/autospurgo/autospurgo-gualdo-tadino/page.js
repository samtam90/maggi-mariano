import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Gualdo Tadino",
    canonical: links.autospurgo["gualdo-tadino"],
});
export default withBaseProps({ 
    title: "Autospurgo Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
