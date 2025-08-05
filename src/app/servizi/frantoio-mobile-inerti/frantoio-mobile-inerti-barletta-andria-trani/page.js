import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Barletta-Andria-Trani",
  canonical: links.servizi["frantoio-mobile-inerti"]["barletta-andria-trani"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Barletta-Andria-Trani",
  locationNames: { label: "Barletta-Andria-Trani", href: "barletta-andria-trani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
