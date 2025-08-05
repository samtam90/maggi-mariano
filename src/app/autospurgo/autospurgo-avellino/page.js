import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Avellino",
    canonical: links.autospurgo["avellino"],
});
export default withBaseProps({ 
    title: "Autospurgo Avellino", 
    locationNames: {label: "Avellino", href: "avellino"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["avellino"],
        name: "Avellino",
    }),
});
