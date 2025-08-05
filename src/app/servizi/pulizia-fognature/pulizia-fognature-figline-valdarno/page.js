import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Figline Valdarno",
  canonical: links.servizi["pulizia-fognature"]["figline-valdarno"],
});
export default withBaseProps({
  title: "Pulizia fognature Figline Valdarno",
  locationNames: { label: "Figline Valdarno", href: "figline-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
