import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rigutino",
  canonical: links.servizi["pulizia-fognature"]["rigutino"],
});
export default withBaseProps({
  title: "Pulizia fognature Rigutino",
  locationNames: { label: "Rigutino", href: "rigutino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
