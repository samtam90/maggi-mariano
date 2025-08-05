import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bari",
    canonical: links.autospurgo["bari"],
});
export default withBaseProps({ 
    title: "Autospurgo Bari", 
    locationNames: {label: "Bari", href: "bari"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["bari"],
        name: "Bari",
    }),
});
