import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Nuoro",
    canonical: links.autospurgo["nuoro"],
});
export default withBaseProps({ 
    title: "Autospurgo Nuoro", 
    locationNames: {label: "Nuoro", href: "nuoro"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["nuoro"],
        name: "Nuoro",
    }),
});
