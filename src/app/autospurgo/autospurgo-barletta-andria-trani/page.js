import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Barletta-Andria-Trani",
    canonical: links.autospurgo["barletta-andria-trani"],
});
export default withBaseProps({ 
    title: "Autospurgo Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["barletta-andria-trani"],
        name: "Barletta-Andria-Trani",
    }),
});
