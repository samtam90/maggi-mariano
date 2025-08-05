import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rigutino",
  canonical: links.servizi["disidratazione-fanghi"]["rigutino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rigutino",
  locationNames: { label: "Rigutino", href: "rigutino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
