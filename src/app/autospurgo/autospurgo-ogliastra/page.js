import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ogliastra",
    canonical: links.autospurgo["ogliastra"],
});
export default withBaseProps({ 
    title: "Autospurgo Ogliastra", 
    locationNames: {label: "Ogliastra", href: "ogliastra"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ogliastra"],
        name: "Ogliastra",
    }),
});
