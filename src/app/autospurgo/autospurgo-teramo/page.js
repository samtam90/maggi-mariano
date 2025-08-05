import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Teramo",
    canonical: links.autospurgo["teramo"],
});
export default withBaseProps({ 
    title: "Autospurgo Teramo", 
    locationNames: {label: "Teramo", href: "teramo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["teramo"],
        name: "Teramo",
    }),
});
