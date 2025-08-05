import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo La Spezia",
    canonical: links.autospurgo["la-spezia"],
});
export default withBaseProps({ 
    title: "Autospurgo La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["la-spezia"],
        name: "La Spezia",
    }),
});
