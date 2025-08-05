import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Mantova",
    canonical: links.autospurgo["mantova"],
});
export default withBaseProps({ 
    title: "Autospurgo Mantova", 
    locationNames: {label: "Mantova", href: "mantova"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["mantova"],
        name: "Mantova",
    }),
});
