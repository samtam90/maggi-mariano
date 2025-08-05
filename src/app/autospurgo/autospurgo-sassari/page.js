import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Sassari",
    canonical: links.autospurgo["sassari"],
});
export default withBaseProps({ 
    title: "Autospurgo Sassari", 
    locationNames: {label: "Sassari", href: "sassari"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["sassari"],
        name: "Sassari",
    }),
});
