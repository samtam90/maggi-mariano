import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Terranuova Bracciolini",
    canonical: links.autospurgo["terranuova-bracciolini"],
});
export default withBaseProps({ 
    title: "Autospurgo Terranuova Bracciolini", 
    locationNames: {label: "Terranuova Bracciolini", href: "terranuova-bracciolini"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
