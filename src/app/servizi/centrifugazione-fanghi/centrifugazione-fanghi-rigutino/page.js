import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Rigutino",
  canonical: links.servizi["centrifugazione-fanghi"]["rigutino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Rigutino",
  locationNames: { label: "Rigutino", href: "rigutino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
